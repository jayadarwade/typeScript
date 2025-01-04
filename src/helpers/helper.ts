import os from "os";
import { readFileSync } from "fs";

export const getLocalMessage = (): Record<string, string> => {
    const language:string = "en";
    const data = readFileSync(__baseuri + "/locals/" + language + ".json");
    return JSON.parse(data.toString())
} 

export const getLocalIp = (): string | undefined => {
    const interfaces = os.networkInterfaces();
    for (let interfaceName in interfaces) {
        for (let iface of interfaces[interfaceName]!) {
            if (iface.family === "IPv4" && !iface.internal)
                return `http://${iface.address}/${process.env.PORT}`
        }
    }
};