import { ListLetterResponse } from '@/models/User';
import { Repository } from '@/core/Repository/index';
import env from '@/core/env/index';

class UploadRepository extends Repository {
  constructor() {
    super(env.API_URL);
  }

  uploadImage(payload: any) {
    const formData = new FormData();
    formData.append('image', payload.image);
    console.log(payload.image, 111)
    return this.request<ListLetterResponse>({
      url: `/upload`,
      method: 'post',
      data: formData,
    });
  }
}
export default new UploadRepository();
