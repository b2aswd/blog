enum ActionType: String {
    case addPhoto
    case report = "workReport"

    var code: String {
        return rawValue
    }
}

extension ActionType {
    var title: String {
        switch self {
        case .addPhoto:
            return "Přidat fotografii"
        case .report:
            return "Ukončit práci"
        }
    }
}

let someValue = "addPhoto"
if someValue == ActionType.addPhoto.code {
    // ...
}

guard let action = ActionType(rawValue: someValue) else {
    return
}
switch action {
case .addPhoto:
    // ...
case .report:
    // ...
}