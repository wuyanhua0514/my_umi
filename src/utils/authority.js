// use localStorage to store the authority info, which might be sent from server in actual project.
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function getAuthority(permissions) {
  // return localStorage.getItem('antd-pro-authority') || ['admin', 'user'];
  const authorityString =
    typeof permissions === 'undefined' ? sessionStorage.getItem('novel_reports_module') : str;
  // authorityString could be admin, "admin", ["admin"]
  let authority;

  try {
    authority = JSON.parse(authorityString);
  } catch (e) {
    authority = authorityString.split(',');
  }
  if (typeof authority === 'string') {
    return [authority];
  }
  return authority || [];
}

function setAuthority(authority) {
  sessionStorage.clear();
  const proAuthority = typeof authority === 'string' ? [authority] : authority;
  const daily_reports = proAuthority.filter(val => val.auth === 'novel_reports_module');
  console.log(daily_reports);
  daily_reports.map(val => {
    const sessionName = val.auth;
    const menu = [];
    const valMap = val => {
      const sessionName = val.auth;
      val.children &&
        val.children.map(val => {
          menu.push(val.auth);
          if (val.children) {
            valMap(val);
          }
          sessionStorage.setItem(sessionName, menu.join(','));
        });
    };
    valMap(val);
  });
  daily_reports.map(val => {
    val.children &&
      val.children.map(value => {
        const sessionName = value.auth;
        const sessionValue =
          value.children &&
          value.children.map(val => {
            if (val.auth.includes('_module')) {
              const sessionChildrenName = val.auth;
              const sessionChildrenValue = val.children && val.children.map(val => val.auth);
              sessionChildrenValue &&
                sessionStorage.setItem(sessionChildrenName, sessionChildrenValue);
              return val.auth;
            } else {
              return val.auth;
            }
          });
        sessionStorage.setItem(
          sessionName,
          sessionValue && sessionValue.filter(res => res != 'undefined')
        );
      });
  });
}
function clearAuthority() {
  sessionStorage.clear();
  cookies.remove('token');
}
export { clearAuthority, setAuthority, getAuthority };
