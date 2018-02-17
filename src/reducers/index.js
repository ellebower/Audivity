import { combineReducers } from "redux";
import TeamMembersReducer from './reducer_team_members';

const rootReducer = combineReducers({
    teamMembers: TeamMembersReducer,
});

export default rootReducer;