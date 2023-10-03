import { createSlice } from "@reduxjs/toolkit";
import caseStudies from "../../api/caseStudies";
const caseStudiesSlice = createSlice({
    name: "case",
    initialState: {
        caseStudyItems: caseStudies,
        selectedCaseStudy: "",
    },
    reducers: {
        setSelectedCaseStudies(state, action) {
            state.selectedCaseStudy = action.payload;
        },
    },
});

export const { setSelectedCaseStudies } = caseStudiesSlice.actions;

export default caseStudiesSlice.reducer;
