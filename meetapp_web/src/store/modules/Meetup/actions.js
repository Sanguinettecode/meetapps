export function addMeetupRequest(id) {
  return {
    type: '@meetup/ADD_REQUEST',
    payload: { id },
  };
}

export function addMeetupSuccess(meetup) {
  return {
    type: '@meetup/ADD_SUCCESS',
    payload: { meetup },
  };
}

export function createMeetupRequest(data) {
  return {
    type: '@meetup/CREATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function createMeetupSuccess(meetup) {
  return {
    type: '@meetup/CREATE_MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function updateMeetupRequest(data) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function addNewMeetup() {
  return {
    type: '@meetup/ADD_NEW_REQUEST',
  };
}

export function deleteMeetup(id) {
  return {
    type: '@meetup/DELETE_REQUEST',
    payload: { id },
  };
}
