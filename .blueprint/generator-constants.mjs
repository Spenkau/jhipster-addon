/**
 * @type {Record<string, string>}
 */
export const javaDependencies = {
  /**
   * spring-boot version should match the one managed by https://mvnrepository.com/artifact/tech.jhipster/jhipster-dependencies/JHIPSTER_DEPENDENCIES_VERSION
   */
  'spring-boot': '3.2.0',
  /*
   * hibernate version should match the one managed by https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-dependencies/SPRING_BOOT_VERSION
   * Required due to hibernate-jpamodelgen annotation processor.
   */
  hibernate: '6.3.1.Final',
  /*
   * cassandra driver version should match the one managed by https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-dependencies/SPRING_BOOT_VERSION
   * Required due to java-driver-mapper-processor annotation processor.
   */
  cassandra: '4.17.0',
};
Object.freeze(javaDependencies);
// The version should be coherent with the one from spring-data-elasticsearch project
export const ELASTICSEARCH_TAG = '8.10.4';
export const ELASTICSEARCH_IMAGE = 'docker.elastic.co/elasticsearch/elasticsearch';
/**
 * @type {Record<string, string>}
 * Manually updated docker containers
 */
export const dockerContainers = {
  elasticsearchTag: ELASTICSEARCH_TAG,
  elasticsearchImage: ELASTICSEARCH_IMAGE,
  elasticsearch: `${ELASTICSEARCH_IMAGE}:${ELASTICSEARCH_TAG}`,
};
Object.freeze(dockerContainers);
export const MAIN_DIR = 'src/main/';
export const TEST_DIR = 'src/test/';
export const JAVA_DOCKER_DIR = `${MAIN_DIR}docker/`;
export const SERVER_MAIN_SRC_DIR = `${MAIN_DIR}java/`;
export const SERVER_MAIN_RES_DIR = `${MAIN_DIR}resources/`;
export const SERVER_TEST_SRC_DIR = `${TEST_DIR}java/`;
export const SERVER_TEST_RES_DIR = `${TEST_DIR}resources/`;
