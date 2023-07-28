import * as XLSX from "xlsx"

// import "./Agencias.xlsx"

export const ImporData = async (files : File ) => {
    // const file : string = "./Agencias.xlsx"

    // let reader = new FileReader();
    // reader.readAsBinaryString(file)

    
    const rawData = await files?.arrayBuffer()
    
    let workbook : XLSX.WorkBook
    let data : XLSX.WorkSheet= []
    try{
        workbook = XLSX.read(rawData, { type: "binary"})
        
        console.log(workbook.SheetNames[0]);
        
        const worksheet = workbook.Sheets[workbook.SheetNames[0]]
        
        data = XLSX.utils.sheet_to_json(worksheet, { header: 1});
        
    }catch{
        alert("Empty")
    }

    return data;
}