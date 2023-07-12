
import { ProfileDetails } from "../components/profiles/ProfileDetails";

export function ProfileDetailsScreen(props) {
    console.log(props.route.params)
    return <ProfileDetails {...props.route.params} />
}

