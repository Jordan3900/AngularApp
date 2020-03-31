
import { PeopleListResolver } from "src/app/resolvers/people/people-list.resolver";
import { PeopleComponent } from "./containers/people/people.component";


export const peopleRoutes = [
    {path: 'list', component: PeopleComponent, resolve: {people: PeopleListResolver} },
]