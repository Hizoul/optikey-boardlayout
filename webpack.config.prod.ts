import * as webpack from "webpack"
import configuration from "./webpack.config"

const modifyConf: any = configuration

modifyConf.mode = "production"

export default modifyConf
