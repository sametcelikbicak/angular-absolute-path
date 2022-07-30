import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class BService {

    public serviceName(): string {
        return "This is service B";
    }
}