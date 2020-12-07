struct ActionType {
    let code: String
    let title: String
}

extension ActionType {
    static let addPhoto = ActionType(code: "addPhoto", title: "Přidat fotografii")
    static let report = ActionType(code: "workReport", title: "Ukončit práci")
}

let someValue = "addPhoto"
if someValue == ActionType.addPhoto.code {
    // ...
}