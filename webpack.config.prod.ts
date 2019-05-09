import * as webpack from "webpack"
import configuration from "./webpack.config"

const modifyConf: any = configuration

modifyConf.plugins.push(new webpack.optimize.ModuleConcatenationPlugin())
modifyConf.mode = "production"

export default modifyConf
