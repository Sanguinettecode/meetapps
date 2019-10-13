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
