import { useDispatch } from "react-redux";

import { AppDispatch } from "@store/index";

const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
