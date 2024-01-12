import { axiosReq, processAxiosResponse } from "../Config/axios";
import { GetRates, GetRatesResponse } from "../Types/apiTypes";

const getRates: GetRates = () => (
    processAxiosResponse(
        axiosReq.get<GetRatesResponse>(`latest/USD`),
    )
)

export {
    getRates
}
