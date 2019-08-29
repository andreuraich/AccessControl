import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Access} from "../models/access.model";
import {BASE_URL} from "../globals";

@Injectable({
    providedIn: "root"
})
export class AccessRegistrationService {

    constructor(private http: HttpClient) {
    }

    registerNewAccess(entryAccess: Access) {
        return this.http.post(`${BASE_URL}/access.json`, JSON.stringify(entryAccess));
    }
}
