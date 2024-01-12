type GetRatesResponse = {
    result: string;
    documentation: string;
    terms_of_use: string;
    time_last_update_unix: string;
    time_last_update_utc: string;
    time_next_update_unix: string;
    time_next_update_utc: string;
    base_code: string;
    conversion_rates: {
        [key: string]: number
    }
}

type GetRates = () => Promise<GetRatesResponse>

export type {
    GetRates,
    GetRatesResponse
}