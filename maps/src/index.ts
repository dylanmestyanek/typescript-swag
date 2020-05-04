import { User } from "./classes/User";
import { Company } from "./classes/Company";
import { Map } from "./classes/Map";

const user = new User();
const company = new Company();
const map = new Map("map");
map.addMarker(user);
map.addMarker(company);
