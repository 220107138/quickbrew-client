import { SingleItemResponse } from "../api/types";
import { SingleItem } from "./SingleItem";
import { SingleItemOptions } from "./SingleItemOptions";

export function SingleItemPage(props: SingleItemResponse) {
  return (
    <div className="w-100 d-flex flex-column flex-md-row" style={{height: '100vh'}}>
      <div className="col-12 col-md-3">
        <SingleItem id={props.id} type={props.type} name={props.name} description={props.description} price={props.price}></SingleItem>
      </div>
      <div className="col-12 col-md-9 mt-4">
        <SingleItemOptions></SingleItemOptions>
      </div>
    </div>
  );
}
