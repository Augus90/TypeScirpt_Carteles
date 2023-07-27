import * as XSLX from "xlsx"

// import "./Agencias.xlsx"

export const ImporData = async (files) => {
    // const file : string = "./Agencias.xlsx"

    // let reader = new FileReader();
    // reader.readAsBinaryString(file)

    const rawData = await files?.arrayBuffer()

    const workbook = XSLX.read(rawData, { type: "binary"})

    console.log(workbook.SheetNames[0]);

    const worksheet = workbook.Sheets[workbook.SheetNames[0]]

    const data = XSLX.utils.sheet_to_json(worksheet, { header: 1});

    return data;
}