import { stringify } from 'qs';
import request from '@/utils/request';

export const remarkEdit = params => {
  const {
    param: { id, type },
    ...rest
  } = params
  try {
    return request(`/novelreport/${id}/${type}/update`, {
      method: 'POST',
      body: rest
    })
  } catch (err) {
    console.log(err)
  }
}

export const getAdList = params => {
  const {
    param: { id, type },
    ...rest
  } = params
  try {
    return request(`/novelreport/${id}/${type}`, {
      method: 'POST',
      body: rest
    })
  } catch (err) {
    console.log(err)
  }
}

export const advChannelAdd = params => {
  const {
    param: { id, type },
    ...rest
  } = params
  try {
    return request(`/novelreport/${id}/add`, {
      method: 'POST',
      body: rest
    })
  } catch (err) {
    console.log(err)
  }
}

export const advEdit = params => {
  const {
    param: { id, type },
    ...rest
  } = params
  try {
    return request(`/novelreport/${id}/update`, {
      method: 'POST',
      body: rest
    })
  } catch (err) {
    console.log(err)
  }
}

export const advLogList = params => {
  try {
    return request('/novelreport/adv/log/list', {
      method: 'POST',
      body: params
    })
  } catch (err) {
    console.log(err)
  }
}

export const addEndEditConfig = params => {
  try {
    return request('/novelreport/adv/config', {
      method: 'POST',
      body: params
    })
  } catch (err) {
    console.log(err)
  }
}

export const querydownload = async params => {
  const {
    match: {
      params: {
        id, type
      }
    },
    ...rest
  } = params
  if (id === 'cost' && type === 'backend') {
    rest.channel_type = '1'
  } else if (id === 'cost' && type === 'special' || id === 'cost' && type === 'outside_backend') {
    rest.channel_type = '2'
  }
  return request(`/novelreport/${id}/${type}`, {
    method: 'POST',
    responseType: 'arraybuffer',
    body: { ...rest },
  });
}

export const addUpdateTask = params => {
  try {
    return request('/novelreport/synctask/add', {
      method: 'POST',
      body: params
    })
  } catch (err) {
    console.log(err)
  }
}

export const getUpdateList = params => {
  try {
    return request('/novelreport/synctask/list', {
      method: 'POST',
      body: params
    })
  } catch (err) {
    console.log(err)
  }
}