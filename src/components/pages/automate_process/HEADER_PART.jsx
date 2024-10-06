export default function HEADER_PART({txt, alt}) {
    const text = []
    if(txt.includes('\n')){
        let textArr= txt.split('\n')
        for(let i=0; i<textArr.length; i++){
            text.push(textArr[i])
            if(i < textArr.length -1){
                text.push(<br/>)
            }
        }
        console.log(text)
    } else{
        text.push(txt)
    }
    return (
        <header aria-label={alt}>
            <h2 className="h2 article-title">{text}</h2>
        </header>
    )
}
