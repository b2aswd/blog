struct ActionType {
    public let code: String
    public let title: String

    public static let close = ActionType.newCase(code: "close", title: "zavřít")

    /// Konstruktor dostupný pouze pro interní použití
    private init(code: String, title: String) {
        self.code = code
        self.title = title
    }

    /// Konstruktor pro získání ActionType z hodnoty
    public init?(code: String?) {
        guard let codeUnwrapped = code, let selfUnwrapped = Self.registeredCases[codeUnwrapped] else {
            return nil
        }
        self = selfUnwrapped
    }

    /// Pole se zaregistrovanými hodnotami
    private static var registeredCases: [String: ActionType] = [:]
    public static var allCases: [ActionType] {
        return Self.registeredCases.map({ $0.value })
    }

    /// Metoda pro registraci
    public static func newCase(code: String, title: String) -> ActionType {
        let someStruct = ActionType(code: code, title: title)
        registeredCases[code] = someStruct
        return someStruct
    }
}