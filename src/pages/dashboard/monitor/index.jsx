import { Card, Col, Row, Statistic } from 'antd';
import { useRequest } from 'umi';
import { Gauge, WordCloud, Liquid, RingProgress } from '@ant-design/charts';
import { GridContent } from '@ant-design/pro-layout';
import numeral from 'numeral';
import Map from './components/Map';
import ActiveChart from './components/ActiveChart';
import { queryTags } from './service';
import styles from './style.less';
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

const Monitor = () => {
  return null;
};

export default Monitor;
