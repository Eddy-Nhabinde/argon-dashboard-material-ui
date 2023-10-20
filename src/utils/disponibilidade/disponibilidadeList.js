import days from '../variables/days.json'

export function GenerateList(disponibilidade) {
    let rows = []

    for (let i = 0; i < disponibilidade?.length / 2; i++) {
        rows?.push(
            <tr>
                <td style={{ fontSize: "16px", color: "#888" }}>
                    {days[parseInt(disponibilidade?.[i]?.diaDaSemana)].label}:
                </td>
                <td>
                    {disponibilidade?.[i]?.inicio} - {disponibilidade?.[i]?.fim}
                </td>
                <td style={{ fontSize: "16px", color: "#888" }}>
                    {days[parseInt(disponibilidade?.[i + 1].diaDaSemana)].label}:
                </td>
                <td>
                    {disponibilidade?.[i + 1]?.inicio} - {disponibilidade?.[i + 1]?.fim}
                </td>
            </tr>
        )
    }

    rows.unshift(<div style={{ fontSize: "16px", color: "#888", lineHeight: "40px" }} >Disponibilidade</div>)
    return rows
}