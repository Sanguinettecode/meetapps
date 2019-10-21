import { produce } from 'immer';
import { format, parseISO } from 'date-fns';
import history from '../../../services/history';

const INITIAL_STATE = {
  meetup: null,
};
export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/ADD_SUCCESS': {
        draft.meetup = null;
        draft.meetup = action.payload.meetup;
        break;
      }
      case '@meetup/ADD_NEW_REQUEST': {
        draft.meetup = null;
        history.push('/meetup');
        break;
      }
      case '@meetup/CREATE_MEETUP_SUCCESS': {
        draft.meetup = null;
        break;
      }

      default:
    }
  });
}
