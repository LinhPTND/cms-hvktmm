import { ListLetterResponse } from '@/models/User';
import { Repository } from '@/core/Repository/index';
declare class UploadRepository extends Repository {
    constructor();
    uploadImage(payload: any): import("rxjs").Observable<import("axios").AxiosResponse<ListLetterResponse, any>>;
}
declare const _default: UploadRepository;
export default _default;
