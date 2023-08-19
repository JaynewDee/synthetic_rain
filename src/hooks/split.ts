//
// Split poem body on delimiters, ":" for paragraphs, "\n" for lines
export function stanzaFormat(body: string) {
    return body.split(":").map(paragraph => {
        return paragraph.split("\n")
    })
}


