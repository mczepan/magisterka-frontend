import {Players} from "./players";
import {LastEvents} from "./last-events";
import {NextEvents} from "./next-events";
import {Team} from "../types/team/team";

export class FavTeam {
  player: Players[];
  lastResults: LastEvents[];
  nextEvents: NextEvents[];
  teamInfo: Team;
}
