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
        const Meetup = {
          id: action.payload.meetup.id,
          title: action.payload.meetup.title,
          description: action.payload.meetup.description,
          locale: action.payload.meetup.locale,
          date: format(parseISO(action.payload.meetup.date), 'yyyy-MM-dd'),
          formatedDate: action.payload.meetup.formatedDate,
          banner: { ...action.payload.meetup.banner },
          user: { ...action.payload.meetup.user },
        };
        draft.meetup = Meetup;
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
