import { LandingPage } from "~/pages/landingPage";
import { Dashboard } from "~/pages/dashboard";

export const PageControl = (props: { logged: boolean }) => {
    let page;
    if(props.logged){
        page = <Dashboard/>;
    }else{
        page = <LandingPage/>;
    }

    return page;
}
