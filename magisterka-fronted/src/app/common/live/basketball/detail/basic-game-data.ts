import {Arena} from "./arena";
import {VTeam} from "./vteam";
import {HTeam} from "./hteam";

export class BasicGameData {
  arena: Arena = new Arena();
  isGameActivated: boolean;
  startTimeUTC: string;
  vTeam: VTeam = new VTeam();
  hTeam: HTeam = new HTeam();

}
