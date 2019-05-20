import { AppBar, Button, Dialog, DialogContent, IconButton, Link, Slide, Toolbar } from "@material-ui/core"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import Typography from "@material-ui/core/Typography"
import CloseIcon from "@material-ui/icons/Close"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { observable } from "mobx"
import { observer } from "mobx-react-lite"
import * as React from "react"
import licenses from "../util/licenses"

const classes: any = {
  appBar: {
    position: "relative"
  },
  flex: {
    flex: 1
  }
}
function Transition(props: any) {
  return <Slide direction="up" {...props} />
}

const isOpen = observable.box(false)
const handleClose = () => {
  isOpen.set(false)
}
const handleOpen = () => isOpen.set(true)

const AboutPanel = observer(() => {
  return (
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary  expandIcon={<ExpandMoreIcon />}>
        <Typography>About</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>
          Written with ❤️ by <Link href="https://github.com/hizoul">hizoul</Link>.<br/>
          Special thanks to&nbsp;
          <Link href="https://github.com/JuliusSweetland">Julius Sweetland</Link>
          &nbsp;for writing&nbsp;
          <Link href="https://github.com/OptiKey/OptiKey">
            OptiKey
          </Link> and&nbsp;
          <Link
            onClick={handleOpen}
            href="#"
          >
            all authors of open source libraries
          </Link>
          &nbsp;enabling the existence of this tool.
        </Typography>
      </ExpansionPanelDetails>
      <Dialog
        fullScreen
        open={isOpen.get()}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" className="flex1">
              Third Party Licenses
            </Typography>
            <IconButton color="inherit" onClick={handleClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <Typography style={{margin: "5rem 0rem"}}>
            {licenses.split("\n").map((s) => <div key={s}>{s}</div>)}
          </Typography>
        </DialogContent>
      </Dialog>
    </ExpansionPanel>
  )
})

export default AboutPanel
