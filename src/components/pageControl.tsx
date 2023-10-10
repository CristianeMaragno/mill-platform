import { LandingPage } from "~/components/landingPage";
import { Dashboard } from "~/components/dashboard";

export const PageControl = (props: { logged: boolean }) => {
    let page;
    if(props.logged){
        page = <Dashboard/>;
    }else{
        page = <LandingPage/>;
    }

    return page;
}
