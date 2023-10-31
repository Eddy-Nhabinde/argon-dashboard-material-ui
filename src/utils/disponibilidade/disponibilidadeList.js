import days from '../variables/days.json'

export function GenerateList(disponibilidade) {
    let rows = []

    for (let i = 0; i < disponibilidade?.length / 2; i++) {
        rows?.push(
            <tr>
                {
                    disponibilidade?.[i * 2] &&
                    <>
                        <td style={{ fontSize: "16px", color: "#888" }}>
                            {days[parseInt(disponibilidade?.[i * 2]?.diaDaSemana)]?.label}:
                        </td>
                        <td>
                            {disponibilidade?.[i * 2]?.inicio} - {disponibilidade?.[i]?.fim}
                        </td>
                    </>
                }
                {
                    disponibilidade?.[(i * 2) + 1] &&
                    <>
                        <td style={{ fontSize: "16px", color: "#888" }}>
                            {days[parseInt(disponibilidade?.[(i * 2) + 1]?.diaDaSemana)]?.label}:
                        </td>
                        <td>
                            {disponibilidade?.[(i * 2) + 1]?.inicio} - {disponibilidade?.[i + 1]?.fim}
                        </td>
                    </>
                }
            </tr>
        )
    }

    rows.unshift(<div style={{ fontSize: "16px", color: "#888", lineHeight: "40px" }} >Disponibilidade</div>)
    return rows
}