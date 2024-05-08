import { SingleItemResponse } from "../api/types";
import { SingleItem } from "./SingleItem";
import { SingleItemOptions } from "./SingleItemOptions";

export function SingleItemPage(props: SingleItemResponse) {
  return (
    <div className="w-100 d-flex" style={{height: '100vh'}}>
      <div className="w-25">
        <SingleItem id={props.id} type={props.type} name={props.name} description={props.description} price={props.price}></SingleItem>
      </div>
      <div>
        <SingleItemOptions></SingleItemOptions>
      </div>
    </div>
  );
}
