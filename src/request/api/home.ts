import service from "../axios";

export function getBanner () {
    return service ({
        method: "GET",
        url: "banner?type=2",
    })
}