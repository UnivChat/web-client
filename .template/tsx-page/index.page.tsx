import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as Styled from "./__M_COMPONENT__.styles";

const __M_COMPONENT__ = () => {
  return <Styled.Container>hi</Styled.Container>;
};

export default __M_COMPONENT__;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
}
