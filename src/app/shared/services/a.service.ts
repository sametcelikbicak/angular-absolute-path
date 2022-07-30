import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class AService {

    public serviceName(): string {
        return "This is service A";
    }
}