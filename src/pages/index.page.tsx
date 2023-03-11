import { useAppSelector } from "@client-state/hooks";
import { Svg } from "~/components/Common";
import { Flex, Grid, SizedBox } from "~/styles";

export default function Home() {
  const isTablet = useAppSelector(({ root }) => root.isTablet);
  return (
    <div>
      <p>current device width is {isTablet ? "tablet" : "PC"}</p>

      <SizedBox _height={12} />
      <Flex>
        <div>이건 FlexBox로 감싸진 요소</div>
        <div>이건 FlexBox로 감싸진 요소2</div>
      </Flex>

      <SizedBox _height={12} />

      <SizedBox _width={500}>
        <Grid columnCount={2} rowGap={10} columnGap={10}>
          <div style={{ border: "1px solid" }}>hi</div>
          <div style={{ border: "1px solid" }}>hi</div>
          <div style={{ border: "1px solid" }}>hi</div>
          <div style={{ border: "1px solid" }}>hi</div>
        </Grid>
      </SizedBox>

      <Svg svgName="play" _width={200} _height={200} _fill="black" />
    </div>
  );
}
