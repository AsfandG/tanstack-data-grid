import { MawbDataTable } from "@/components/shipment-details/data-table";
import { MawbData } from "@/components/shipment-details/mock-data";
import { columns } from "@/components/shipment-details/column";

const ShipmentDetails = () => {
  return (
    <div className="container">
      <h1 className="text-2xl font-bold">
        <MawbDataTable data={MawbData} columns={columns} />
      </h1>
    </div>
  );
};

export default ShipmentDetails;
