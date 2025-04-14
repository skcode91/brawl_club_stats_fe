import _instance from "../_instance";
import { ClubBaseInfoDto } from "./dto";

const club = {
  getAll: async () => {
    return _instance.get<ClubBaseInfoDto[]>("/clubs");
  },
};

export default club;
