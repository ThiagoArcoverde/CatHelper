import ActionPing       from "../services/actions/ActionPing"
import ActionTest       from "../services/actions/ActionTest"
import ActionCatVideo   from "../services/actions/ActionCatVideo"
import ActionSealVideo  from "../services/actions/ActionSealVideo"
import ActionFishReact  from "../services/actions/ActionFishReact"
import ActionHorseReact from "../services/actions/ActionHorseReact"

export default class AppActionsController {

    async defineActions(app: any) {
        new ActionPing()        .action(app)
        new ActionTest()        .action(app)
        new ActionCatVideo()    .action(app)
        new ActionSealVideo()   .action(app)
        new ActionFishReact()   .action(app)
        new ActionHorseReact()  .action(app)
    }

}