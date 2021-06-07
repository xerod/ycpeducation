import { NextPage } from "next";
import Default from "../components/layouts/Default";

export type PageWithLayoutType = NextPage & { layout: typeof Default };
