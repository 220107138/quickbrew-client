import {Card} from 'primereact/card'

export function SingleItemPage (){
    const header = (
        <img alt="Card" src="https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630" />
    );
    return(
        <div>
            <Card title="Latte" header={header}></Card>
        </div>
    )
}