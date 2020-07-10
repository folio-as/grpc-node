// Original file: deps/envoy-api/envoy/api/v2/route/route_components.proto

import { WeightedCluster as _envoy_api_v2_route_WeightedCluster, WeightedCluster__Output as _envoy_api_v2_route_WeightedCluster__Output } from '../../../../envoy/api/v2/route/WeightedCluster';
import { Metadata as _envoy_api_v2_core_Metadata, Metadata__Output as _envoy_api_v2_core_Metadata__Output } from '../../../../envoy/api/v2/core/Metadata';
import { BoolValue as _google_protobuf_BoolValue, BoolValue__Output as _google_protobuf_BoolValue__Output } from '../../../../google/protobuf/BoolValue';
import { Duration as _google_protobuf_Duration, Duration__Output as _google_protobuf_Duration__Output } from '../../../../google/protobuf/Duration';
import { RetryPolicy as _envoy_api_v2_route_RetryPolicy, RetryPolicy__Output as _envoy_api_v2_route_RetryPolicy__Output } from '../../../../envoy/api/v2/route/RetryPolicy';
import { RoutingPriority as _envoy_api_v2_core_RoutingPriority } from '../../../../envoy/api/v2/core/RoutingPriority';
import { RateLimit as _envoy_api_v2_route_RateLimit, RateLimit__Output as _envoy_api_v2_route_RateLimit__Output } from '../../../../envoy/api/v2/route/RateLimit';
import { CorsPolicy as _envoy_api_v2_route_CorsPolicy, CorsPolicy__Output as _envoy_api_v2_route_CorsPolicy__Output } from '../../../../envoy/api/v2/route/CorsPolicy';
import { HedgePolicy as _envoy_api_v2_route_HedgePolicy, HedgePolicy__Output as _envoy_api_v2_route_HedgePolicy__Output } from '../../../../envoy/api/v2/route/HedgePolicy';
import { UInt32Value as _google_protobuf_UInt32Value, UInt32Value__Output as _google_protobuf_UInt32Value__Output } from '../../../../google/protobuf/UInt32Value';
import { RegexMatchAndSubstitute as _envoy_type_matcher_RegexMatchAndSubstitute, RegexMatchAndSubstitute__Output as _envoy_type_matcher_RegexMatchAndSubstitute__Output } from '../../../../envoy/type/matcher/RegexMatchAndSubstitute';
import { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../../../../google/protobuf/Any';
import { RuntimeFractionalPercent as _envoy_api_v2_core_RuntimeFractionalPercent, RuntimeFractionalPercent__Output as _envoy_api_v2_core_RuntimeFractionalPercent__Output } from '../../../../envoy/api/v2/core/RuntimeFractionalPercent';

// Original file: deps/envoy-api/envoy/api/v2/route/route_components.proto

export enum _envoy_api_v2_route_RouteAction_ClusterNotFoundResponseCode {
  /**
   * HTTP status code - 503 Service Unavailable.
   */
  SERVICE_UNAVAILABLE = 0,
  /**
   * HTTP status code - 404 Not Found.
   */
  NOT_FOUND = 1,
}

/**
 * Specifies the route's hashing policy if the upstream cluster uses a hashing :ref:`load balancer
 * <arch_overview_load_balancing_types>`.
 * [#next-free-field: 7]
 */
export interface _envoy_api_v2_route_RouteAction_HashPolicy {
  /**
   * Header hash policy.
   */
  'header'?: (_envoy_api_v2_route_RouteAction_HashPolicy_Header);
  /**
   * Cookie hash policy.
   */
  'cookie'?: (_envoy_api_v2_route_RouteAction_HashPolicy_Cookie);
  /**
   * Connection properties hash policy.
   */
  'connection_properties'?: (_envoy_api_v2_route_RouteAction_HashPolicy_ConnectionProperties);
  /**
   * Query parameter hash policy.
   */
  'query_parameter'?: (_envoy_api_v2_route_RouteAction_HashPolicy_QueryParameter);
  /**
   * Filter state hash policy.
   */
  'filter_state'?: (_envoy_api_v2_route_RouteAction_HashPolicy_FilterState);
  /**
   * The flag that short-circuits the hash computing. This field provides a
   * 'fallback' style of configuration: "if a terminal policy doesn't work,
   * fallback to rest of the policy list", it saves time when the terminal
   * policy works.
   * 
   * If true, and there is already a hash computed, ignore rest of the
   * list of hash polices.
   * For example, if the following hash methods are configured:
   * 
   * ========= ========
   * specifier terminal
   * ========= ========
   * Header A  true
   * Header B  false
   * Header C  false
   * ========= ========
   * 
   * The generateHash process ends if policy "header A" generates a hash, as
   * it's a terminal policy.
   */
  'terminal'?: (boolean);
  'policy_specifier'?: "header"|"cookie"|"connection_properties"|"query_parameter"|"filter_state";
}

/**
 * Specifies the route's hashing policy if the upstream cluster uses a hashing :ref:`load balancer
 * <arch_overview_load_balancing_types>`.
 * [#next-free-field: 7]
 */
export interface _envoy_api_v2_route_RouteAction_HashPolicy__Output {
  /**
   * Header hash policy.
   */
  'header'?: (_envoy_api_v2_route_RouteAction_HashPolicy_Header__Output);
  /**
   * Cookie hash policy.
   */
  'cookie'?: (_envoy_api_v2_route_RouteAction_HashPolicy_Cookie__Output);
  /**
   * Connection properties hash policy.
   */
  'connection_properties'?: (_envoy_api_v2_route_RouteAction_HashPolicy_ConnectionProperties__Output);
  /**
   * Query parameter hash policy.
   */
  'query_parameter'?: (_envoy_api_v2_route_RouteAction_HashPolicy_QueryParameter__Output);
  /**
   * Filter state hash policy.
   */
  'filter_state'?: (_envoy_api_v2_route_RouteAction_HashPolicy_FilterState__Output);
  /**
   * The flag that short-circuits the hash computing. This field provides a
   * 'fallback' style of configuration: "if a terminal policy doesn't work,
   * fallback to rest of the policy list", it saves time when the terminal
   * policy works.
   * 
   * If true, and there is already a hash computed, ignore rest of the
   * list of hash polices.
   * For example, if the following hash methods are configured:
   * 
   * ========= ========
   * specifier terminal
   * ========= ========
   * Header A  true
   * Header B  false
   * Header C  false
   * ========= ========
   * 
   * The generateHash process ends if policy "header A" generates a hash, as
   * it's a terminal policy.
   */
  'terminal': (boolean);
  'policy_specifier': "header"|"cookie"|"connection_properties"|"query_parameter"|"filter_state";
}

export interface _envoy_api_v2_route_RouteAction_HashPolicy_ConnectionProperties {
  /**
   * Hash on source IP address.
   */
  'source_ip'?: (boolean);
}

export interface _envoy_api_v2_route_RouteAction_HashPolicy_ConnectionProperties__Output {
  /**
   * Hash on source IP address.
   */
  'source_ip': (boolean);
}

/**
 * Envoy supports two types of cookie affinity:
 * 
 * 1. Passive. Envoy takes a cookie that's present in the cookies header and
 * hashes on its value.
 * 
 * 2. Generated. Envoy generates and sets a cookie with an expiration (TTL)
 * on the first request from the client in its response to the client,
 * based on the endpoint the request gets sent to. The client then
 * presents this on the next and all subsequent requests. The hash of
 * this is sufficient to ensure these requests get sent to the same
 * endpoint. The cookie is generated by hashing the source and
 * destination ports and addresses so that multiple independent HTTP2
 * streams on the same connection will independently receive the same
 * cookie, even if they arrive at the Envoy simultaneously.
 */
export interface _envoy_api_v2_route_RouteAction_HashPolicy_Cookie {
  /**
   * The name of the cookie that will be used to obtain the hash key. If the
   * cookie is not present and ttl below is not set, no hash will be
   * produced.
   */
  'name'?: (string);
  /**
   * If specified, a cookie with the TTL will be generated if the cookie is
   * not present. If the TTL is present and zero, the generated cookie will
   * be a session cookie.
   */
  'ttl'?: (_google_protobuf_Duration);
  /**
   * The name of the path for the cookie. If no path is specified here, no path
   * will be set for the cookie.
   */
  'path'?: (string);
}

/**
 * Envoy supports two types of cookie affinity:
 * 
 * 1. Passive. Envoy takes a cookie that's present in the cookies header and
 * hashes on its value.
 * 
 * 2. Generated. Envoy generates and sets a cookie with an expiration (TTL)
 * on the first request from the client in its response to the client,
 * based on the endpoint the request gets sent to. The client then
 * presents this on the next and all subsequent requests. The hash of
 * this is sufficient to ensure these requests get sent to the same
 * endpoint. The cookie is generated by hashing the source and
 * destination ports and addresses so that multiple independent HTTP2
 * streams on the same connection will independently receive the same
 * cookie, even if they arrive at the Envoy simultaneously.
 */
export interface _envoy_api_v2_route_RouteAction_HashPolicy_Cookie__Output {
  /**
   * The name of the cookie that will be used to obtain the hash key. If the
   * cookie is not present and ttl below is not set, no hash will be
   * produced.
   */
  'name': (string);
  /**
   * If specified, a cookie with the TTL will be generated if the cookie is
   * not present. If the TTL is present and zero, the generated cookie will
   * be a session cookie.
   */
  'ttl': (_google_protobuf_Duration__Output);
  /**
   * The name of the path for the cookie. If no path is specified here, no path
   * will be set for the cookie.
   */
  'path': (string);
}

export interface _envoy_api_v2_route_RouteAction_HashPolicy_FilterState {
  /**
   * The name of the Object in the per-request filterState, which is an
   * Envoy::Http::Hashable object. If there is no data associated with the key,
   * or the stored object is not Envoy::Http::Hashable, no hash will be produced.
   */
  'key'?: (string);
}

export interface _envoy_api_v2_route_RouteAction_HashPolicy_FilterState__Output {
  /**
   * The name of the Object in the per-request filterState, which is an
   * Envoy::Http::Hashable object. If there is no data associated with the key,
   * or the stored object is not Envoy::Http::Hashable, no hash will be produced.
   */
  'key': (string);
}

export interface _envoy_api_v2_route_RouteAction_HashPolicy_Header {
  /**
   * The name of the request header that will be used to obtain the hash
   * key. If the request header is not present, no hash will be produced.
   */
  'header_name'?: (string);
}

export interface _envoy_api_v2_route_RouteAction_HashPolicy_Header__Output {
  /**
   * The name of the request header that will be used to obtain the hash
   * key. If the request header is not present, no hash will be produced.
   */
  'header_name': (string);
}

export interface _envoy_api_v2_route_RouteAction_HashPolicy_QueryParameter {
  /**
   * The name of the URL query parameter that will be used to obtain the hash
   * key. If the parameter is not present, no hash will be produced. Query
   * parameter names are case-sensitive.
   */
  'name'?: (string);
}

export interface _envoy_api_v2_route_RouteAction_HashPolicy_QueryParameter__Output {
  /**
   * The name of the URL query parameter that will be used to obtain the hash
   * key. If the parameter is not present, no hash will be produced. Query
   * parameter names are case-sensitive.
   */
  'name': (string);
}

// Original file: deps/envoy-api/envoy/api/v2/route/route_components.proto

/**
 * Configures :ref:`internal redirect <arch_overview_internal_redirects>` behavior.
 */
export enum _envoy_api_v2_route_RouteAction_InternalRedirectAction {
  PASS_THROUGH_INTERNAL_REDIRECT = 0,
  HANDLE_INTERNAL_REDIRECT = 1,
}

/**
 * The router is capable of shadowing traffic from one cluster to another. The current
 * implementation is "fire and forget," meaning Envoy will not wait for the shadow cluster to
 * respond before returning the response from the primary cluster. All normal statistics are
 * collected for the shadow cluster making this feature useful for testing.
 * 
 * During shadowing, the host/authority header is altered such that *-shadow* is appended. This is
 * useful for logging. For example, *cluster1* becomes *cluster1-shadow*.
 * 
 * .. note::
 * 
 * Shadowing will not be triggered if the primary cluster does not exist.
 */
export interface _envoy_api_v2_route_RouteAction_RequestMirrorPolicy {
  /**
   * Specifies the cluster that requests will be mirrored to. The cluster must
   * exist in the cluster manager configuration.
   */
  'cluster'?: (string);
  /**
   * If not specified, all requests to the target cluster will be mirrored. If
   * specified, Envoy will lookup the runtime key to get the % of requests to
   * mirror. Valid values are from 0 to 10000, allowing for increments of
   * 0.01% of requests to be mirrored. If the runtime key is specified in the
   * configuration but not present in runtime, 0 is the default and thus 0% of
   * requests will be mirrored.
   * 
   * .. attention::
   * 
   * **This field is deprecated**. Set the
   * :ref:`runtime_fraction
   * <envoy_api_field_route.RouteAction.RequestMirrorPolicy.runtime_fraction>`
   * field instead. Mirroring occurs if both this and
   * <envoy_api_field_route.RouteAction.RequestMirrorPolicy.runtime_fraction>`
   * are not set.
   */
  'runtime_key'?: (string);
  /**
   * If not specified, all requests to the target cluster will be mirrored.
   * 
   * If specified, this field takes precedence over the `runtime_key` field and requests must also
   * fall under the percentage of matches indicated by this field.
   * 
   * For some fraction N/D, a random number in the range [0,D) is selected. If the
   * number is <= the value of the numerator N, or if the key is not present, the default
   * value, the request will be mirrored.
   */
  'runtime_fraction'?: (_envoy_api_v2_core_RuntimeFractionalPercent);
  /**
   * Determines if the trace span should be sampled. Defaults to true.
   */
  'trace_sampled'?: (_google_protobuf_BoolValue);
}

/**
 * The router is capable of shadowing traffic from one cluster to another. The current
 * implementation is "fire and forget," meaning Envoy will not wait for the shadow cluster to
 * respond before returning the response from the primary cluster. All normal statistics are
 * collected for the shadow cluster making this feature useful for testing.
 * 
 * During shadowing, the host/authority header is altered such that *-shadow* is appended. This is
 * useful for logging. For example, *cluster1* becomes *cluster1-shadow*.
 * 
 * .. note::
 * 
 * Shadowing will not be triggered if the primary cluster does not exist.
 */
export interface _envoy_api_v2_route_RouteAction_RequestMirrorPolicy__Output {
  /**
   * Specifies the cluster that requests will be mirrored to. The cluster must
   * exist in the cluster manager configuration.
   */
  'cluster': (string);
  /**
   * If not specified, all requests to the target cluster will be mirrored. If
   * specified, Envoy will lookup the runtime key to get the % of requests to
   * mirror. Valid values are from 0 to 10000, allowing for increments of
   * 0.01% of requests to be mirrored. If the runtime key is specified in the
   * configuration but not present in runtime, 0 is the default and thus 0% of
   * requests will be mirrored.
   * 
   * .. attention::
   * 
   * **This field is deprecated**. Set the
   * :ref:`runtime_fraction
   * <envoy_api_field_route.RouteAction.RequestMirrorPolicy.runtime_fraction>`
   * field instead. Mirroring occurs if both this and
   * <envoy_api_field_route.RouteAction.RequestMirrorPolicy.runtime_fraction>`
   * are not set.
   */
  'runtime_key': (string);
  /**
   * If not specified, all requests to the target cluster will be mirrored.
   * 
   * If specified, this field takes precedence over the `runtime_key` field and requests must also
   * fall under the percentage of matches indicated by this field.
   * 
   * For some fraction N/D, a random number in the range [0,D) is selected. If the
   * number is <= the value of the numerator N, or if the key is not present, the default
   * value, the request will be mirrored.
   */
  'runtime_fraction': (_envoy_api_v2_core_RuntimeFractionalPercent__Output);
  /**
   * Determines if the trace span should be sampled. Defaults to true.
   */
  'trace_sampled': (_google_protobuf_BoolValue__Output);
}

/**
 * Allows enabling and disabling upgrades on a per-route basis.
 * This overrides any enabled/disabled upgrade filter chain specified in the
 * HttpConnectionManager
 * :ref:`upgrade_configs
 * <envoy_api_field_config.filter.network.http_connection_manager.v2.HttpConnectionManager.upgrade_configs>`
 * but does not affect any custom filter chain specified there.
 */
export interface _envoy_api_v2_route_RouteAction_UpgradeConfig {
  /**
   * The case-insensitive name of this upgrade, e.g. "websocket".
   * For each upgrade type present in upgrade_configs, requests with
   * Upgrade: [upgrade_type] will be proxied upstream.
   */
  'upgrade_type'?: (string);
  /**
   * Determines if upgrades are available on this route. Defaults to true.
   */
  'enabled'?: (_google_protobuf_BoolValue);
}

/**
 * Allows enabling and disabling upgrades on a per-route basis.
 * This overrides any enabled/disabled upgrade filter chain specified in the
 * HttpConnectionManager
 * :ref:`upgrade_configs
 * <envoy_api_field_config.filter.network.http_connection_manager.v2.HttpConnectionManager.upgrade_configs>`
 * but does not affect any custom filter chain specified there.
 */
export interface _envoy_api_v2_route_RouteAction_UpgradeConfig__Output {
  /**
   * The case-insensitive name of this upgrade, e.g. "websocket".
   * For each upgrade type present in upgrade_configs, requests with
   * Upgrade: [upgrade_type] will be proxied upstream.
   */
  'upgrade_type': (string);
  /**
   * Determines if upgrades are available on this route. Defaults to true.
   */
  'enabled': (_google_protobuf_BoolValue__Output);
}

/**
 * [#next-free-field: 34]
 */
export interface RouteAction {
  /**
   * Indicates the upstream cluster to which the request should be routed
   * to.
   */
  'cluster'?: (string);
  /**
   * Envoy will determine the cluster to route to by reading the value of the
   * HTTP header named by cluster_header from the request headers. If the
   * header is not found or the referenced cluster does not exist, Envoy will
   * return a 404 response.
   * 
   * .. attention::
   * 
   * Internally, Envoy always uses the HTTP/2 *:authority* header to represent the HTTP/1
   * *Host* header. Thus, if attempting to match on *Host*, match on *:authority* instead.
   */
  'cluster_header'?: (string);
  /**
   * Multiple upstream clusters can be specified for a given route. The
   * request is routed to one of the upstream clusters based on weights
   * assigned to each cluster. See
   * :ref:`traffic splitting <config_http_conn_man_route_table_traffic_splitting_split>`
   * for additional documentation.
   */
  'weighted_clusters'?: (_envoy_api_v2_route_WeightedCluster);
  /**
   * Optional endpoint metadata match criteria used by the subset load balancer. Only endpoints
   * in the upstream cluster with metadata matching what's set in this field will be considered
   * for load balancing. If using :ref:`weighted_clusters
   * <envoy_api_field_route.RouteAction.weighted_clusters>`, metadata will be merged, with values
   * provided there taking precedence. The filter name should be specified as *envoy.lb*.
   */
  'metadata_match'?: (_envoy_api_v2_core_Metadata);
  /**
   * Indicates that during forwarding, the matched prefix (or path) should be
   * swapped with this value. This option allows application URLs to be rooted
   * at a different path from those exposed at the reverse proxy layer. The router filter will
   * place the original path before rewrite into the :ref:`x-envoy-original-path
   * <config_http_filters_router_x-envoy-original-path>` header.
   * 
   * Only one of *prefix_rewrite* or
   * :ref:`regex_rewrite <envoy_api_field_route.RouteAction.regex_rewrite>`
   * may be specified.
   * 
   * .. attention::
   * 
   * Pay careful attention to the use of trailing slashes in the
   * :ref:`route's match <envoy_api_field_route.Route.match>` prefix value.
   * Stripping a prefix from a path requires multiple Routes to handle all cases. For example,
   * rewriting * /prefix* to * /* and * /prefix/etc* to * /etc* cannot be done in a single
   * :ref:`Route <envoy_api_msg_route.Route>`, as shown by the below config entries:
   * 
   * .. code-block:: yaml
   * 
   * - match:
   * prefix: "/prefix/"
   * route:
   * prefix_rewrite: "/"
   * - match:
   * prefix: "/prefix"
   * route:
   * prefix_rewrite: "/"
   * 
   * Having above entries in the config, requests to * /prefix* will be stripped to * /*, while
   * requests to * /prefix/etc* will be stripped to * /etc*.
   */
  'prefix_rewrite'?: (string);
  /**
   * Indicates that during forwarding, the host header will be swapped with
   * this value.
   */
  'host_rewrite'?: (string);
  /**
   * Indicates that during forwarding, the host header will be swapped with
   * the hostname of the upstream host chosen by the cluster manager. This
   * option is applicable only when the destination cluster for a route is of
   * type *strict_dns* or *logical_dns*. Setting this to true with other cluster
   * types has no effect.
   */
  'auto_host_rewrite'?: (_google_protobuf_BoolValue);
  /**
   * Specifies the upstream timeout for the route. If not specified, the default is 15s. This
   * spans between the point at which the entire downstream request (i.e. end-of-stream) has been
   * processed and when the upstream response has been completely processed. A value of 0 will
   * disable the route's timeout.
   * 
   * .. note::
   * 
   * This timeout includes all retries. See also
   * :ref:`config_http_filters_router_x-envoy-upstream-rq-timeout-ms`,
   * :ref:`config_http_filters_router_x-envoy-upstream-rq-per-try-timeout-ms`, and the
   * :ref:`retry overview <arch_overview_http_routing_retry>`.
   */
  'timeout'?: (_google_protobuf_Duration);
  /**
   * Indicates that the route has a retry policy. Note that if this is set,
   * it'll take precedence over the virtual host level retry policy entirely
   * (e.g.: policies are not merged, most internal one becomes the enforced policy).
   */
  'retry_policy'?: (_envoy_api_v2_route_RetryPolicy);
  /**
   * Indicates that the route has a request mirroring policy.
   * 
   * .. attention::
   * This field has been deprecated in favor of `request_mirror_policies` which supports one or
   * more mirroring policies.
   */
  'request_mirror_policy'?: (_envoy_api_v2_route_RouteAction_RequestMirrorPolicy);
  /**
   * Optionally specifies the :ref:`routing priority <arch_overview_http_routing_priority>`.
   */
  'priority'?: (_envoy_api_v2_core_RoutingPriority | keyof typeof _envoy_api_v2_core_RoutingPriority);
  /**
   * Specifies a set of rate limit configurations that could be applied to the
   * route.
   */
  'rate_limits'?: (_envoy_api_v2_route_RateLimit)[];
  /**
   * Specifies if the rate limit filter should include the virtual host rate
   * limits. By default, if the route configured rate limits, the virtual host
   * :ref:`rate_limits <envoy_api_field_route.VirtualHost.rate_limits>` are not applied to the
   * request.
   */
  'include_vh_rate_limits'?: (_google_protobuf_BoolValue);
  /**
   * Specifies a list of hash policies to use for ring hash load balancing. Each
   * hash policy is evaluated individually and the combined result is used to
   * route the request. The method of combination is deterministic such that
   * identical lists of hash policies will produce the same hash. Since a hash
   * policy examines specific parts of a request, it can fail to produce a hash
   * (i.e. if the hashed header is not present). If (and only if) all configured
   * hash policies fail to generate a hash, no hash will be produced for
   * the route. In this case, the behavior is the same as if no hash policies
   * were specified (i.e. the ring hash load balancer will choose a random
   * backend). If a hash policy has the "terminal" attribute set to true, and
   * there is already a hash generated, the hash is returned immediately,
   * ignoring the rest of the hash policy list.
   */
  'hash_policy'?: (_envoy_api_v2_route_RouteAction_HashPolicy)[];
  /**
   * Indicates that the route has a CORS policy.
   */
  'cors'?: (_envoy_api_v2_route_CorsPolicy);
  /**
   * The HTTP status code to use when configured cluster is not found.
   * The default response code is 503 Service Unavailable.
   */
  'cluster_not_found_response_code'?: (_envoy_api_v2_route_RouteAction_ClusterNotFoundResponseCode | keyof typeof _envoy_api_v2_route_RouteAction_ClusterNotFoundResponseCode);
  /**
   * If present, and the request is a gRPC request, use the
   * `grpc-timeout header <https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md>`_,
   * or its default value (infinity) instead of
   * :ref:`timeout <envoy_api_field_route.RouteAction.timeout>`, but limit the applied timeout
   * to the maximum value specified here. If configured as 0, the maximum allowed timeout for
   * gRPC requests is infinity. If not configured at all, the `grpc-timeout` header is not used
   * and gRPC requests time out like any other requests using
   * :ref:`timeout <envoy_api_field_route.RouteAction.timeout>` or its default.
   * This can be used to prevent unexpected upstream request timeouts due to potentially long
   * time gaps between gRPC request and response in gRPC streaming mode.
   * 
   * .. note::
   * 
   * If a timeout is specified using :ref:`config_http_filters_router_x-envoy-upstream-rq-timeout-ms`, it takes
   * precedence over `grpc-timeout header <https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md>`_, when
   * both are present. See also
   * :ref:`config_http_filters_router_x-envoy-upstream-rq-timeout-ms`,
   * :ref:`config_http_filters_router_x-envoy-upstream-rq-per-try-timeout-ms`, and the
   * :ref:`retry overview <arch_overview_http_routing_retry>`.
   */
  'max_grpc_timeout'?: (_google_protobuf_Duration);
  /**
   * Specifies the idle timeout for the route. If not specified, there is no per-route idle timeout,
   * although the connection manager wide :ref:`stream_idle_timeout
   * <envoy_api_field_config.filter.network.http_connection_manager.v2.HttpConnectionManager.stream_idle_timeout>`
   * will still apply. A value of 0 will completely disable the route's idle timeout, even if a
   * connection manager stream idle timeout is configured.
   * 
   * The idle timeout is distinct to :ref:`timeout
   * <envoy_api_field_route.RouteAction.timeout>`, which provides an upper bound
   * on the upstream response time; :ref:`idle_timeout
   * <envoy_api_field_route.RouteAction.idle_timeout>` instead bounds the amount
   * of time the request's stream may be idle.
   * 
   * After header decoding, the idle timeout will apply on downstream and
   * upstream request events. Each time an encode/decode event for headers or
   * data is processed for the stream, the timer will be reset. If the timeout
   * fires, the stream is terminated with a 408 Request Timeout error code if no
   * upstream response header has been received, otherwise a stream reset
   * occurs.
   */
  'idle_timeout'?: (_google_protobuf_Duration);
  'upgrade_configs'?: (_envoy_api_v2_route_RouteAction_UpgradeConfig)[];
  'internal_redirect_action'?: (_envoy_api_v2_route_RouteAction_InternalRedirectAction | keyof typeof _envoy_api_v2_route_RouteAction_InternalRedirectAction);
  /**
   * Indicates that the route has a hedge policy. Note that if this is set,
   * it'll take precedence over the virtual host level hedge policy entirely
   * (e.g.: policies are not merged, most internal one becomes the enforced policy).
   */
  'hedge_policy'?: (_envoy_api_v2_route_HedgePolicy);
  /**
   * If present, Envoy will adjust the timeout provided by the `grpc-timeout` header by subtracting
   * the provided duration from the header. This is useful in allowing Envoy to set its global
   * timeout to be less than that of the deadline imposed by the calling client, which makes it more
   * likely that Envoy will handle the timeout instead of having the call canceled by the client.
   * The offset will only be applied if the provided grpc_timeout is greater than the offset. This
   * ensures that the offset will only ever decrease the timeout and never set it to 0 (meaning
   * infinity).
   */
  'grpc_timeout_offset'?: (_google_protobuf_Duration);
  /**
   * Indicates that during forwarding, the host header will be swapped with the content of given
   * downstream or :ref:`custom <config_http_conn_man_headers_custom_request_headers>` header.
   * If header value is empty, host header is left intact.
   * 
   * .. attention::
   * 
   * Pay attention to the potential security implications of using this option. Provided header
   * must come from trusted source.
   */
  'auto_host_rewrite_header'?: (string);
  /**
   * Indicates that the route has request mirroring policies.
   */
  'request_mirror_policies'?: (_envoy_api_v2_route_RouteAction_RequestMirrorPolicy)[];
  /**
   * An internal redirect is handled, iff the number of previous internal redirects that a
   * downstream request has encountered is lower than this value, and
   * :ref:`internal_redirect_action <envoy_api_field_route.RouteAction.internal_redirect_action>`
   * is set to :ref:`HANDLE_INTERNAL_REDIRECT
   * <envoy_api_enum_value_route.RouteAction.InternalRedirectAction.HANDLE_INTERNAL_REDIRECT>`
   * In the case where a downstream request is bounced among multiple routes by internal redirect,
   * the first route that hits this threshold, or has
   * :ref:`internal_redirect_action <envoy_api_field_route.RouteAction.internal_redirect_action>`
   * set to
   * :ref:`PASS_THROUGH_INTERNAL_REDIRECT
   * <envoy_api_enum_value_route.RouteAction.InternalRedirectAction.PASS_THROUGH_INTERNAL_REDIRECT>`
   * will pass the redirect back to downstream.
   * 
   * If not specified, at most one redirect will be followed.
   */
  'max_internal_redirects'?: (_google_protobuf_UInt32Value);
  /**
   * Indicates that during forwarding, portions of the path that match the
   * pattern should be rewritten, even allowing the substitution of capture
   * groups from the pattern into the new path as specified by the rewrite
   * substitution string. This is useful to allow application paths to be
   * rewritten in a way that is aware of segments with variable content like
   * identifiers. The router filter will place the original path as it was
   * before the rewrite into the :ref:`x-envoy-original-path
   * <config_http_filters_router_x-envoy-original-path>` header.
   * 
   * Only one of :ref:`prefix_rewrite <envoy_api_field_route.RouteAction.prefix_rewrite>`
   * or *regex_rewrite* may be specified.
   * 
   * Examples using Google's `RE2 <https://github.com/google/re2>`_ engine:
   * 
   * * The path pattern ``^/service/([^/]+)(/.*)$`` paired with a substitution
   * string of ``\2/instance/\1`` would transform ``/service/foo/v1/api``
   * into ``/v1/api/instance/foo``.
   * 
   * * The pattern ``one`` paired with a substitution string of ``two`` would
   * transform ``/xxx/one/yyy/one/zzz`` into ``/xxx/two/yyy/two/zzz``.
   * 
   * * The pattern ``^(.*?)one(.*)$`` paired with a substitution string of
   * ``\1two\2`` would replace only the first occurrence of ``one``,
   * transforming path ``/xxx/one/yyy/one/zzz`` into ``/xxx/two/yyy/one/zzz``.
   * 
   * * The pattern ``(?i)/xxx/`` paired with a substitution string of ``/yyy/``
   * would do a case-insensitive match and transform path ``/aaa/XxX/bbb`` to
   * ``/aaa/yyy/bbb``.
   */
  'regex_rewrite'?: (_envoy_type_matcher_RegexMatchAndSubstitute);
  /**
   * [#not-implemented-hide:]
   * Specifies the configuration for retry policy extension. Note that if this is set, it'll take
   * precedence over the virtual host level retry policy entirely (e.g.: policies are not merged,
   * most internal one becomes the enforced policy). :ref:`Retry policy <envoy_api_field_route.VirtualHost.retry_policy>`
   * should not be set if this field is used.
   */
  'retry_policy_typed_config'?: (_google_protobuf_Any);
  'cluster_specifier'?: "cluster"|"cluster_header"|"weighted_clusters";
  'host_rewrite_specifier'?: "host_rewrite"|"auto_host_rewrite"|"auto_host_rewrite_header";
}

/**
 * [#next-free-field: 34]
 */
export interface RouteAction__Output {
  /**
   * Indicates the upstream cluster to which the request should be routed
   * to.
   */
  'cluster'?: (string);
  /**
   * Envoy will determine the cluster to route to by reading the value of the
   * HTTP header named by cluster_header from the request headers. If the
   * header is not found or the referenced cluster does not exist, Envoy will
   * return a 404 response.
   * 
   * .. attention::
   * 
   * Internally, Envoy always uses the HTTP/2 *:authority* header to represent the HTTP/1
   * *Host* header. Thus, if attempting to match on *Host*, match on *:authority* instead.
   */
  'cluster_header'?: (string);
  /**
   * Multiple upstream clusters can be specified for a given route. The
   * request is routed to one of the upstream clusters based on weights
   * assigned to each cluster. See
   * :ref:`traffic splitting <config_http_conn_man_route_table_traffic_splitting_split>`
   * for additional documentation.
   */
  'weighted_clusters'?: (_envoy_api_v2_route_WeightedCluster__Output);
  /**
   * Optional endpoint metadata match criteria used by the subset load balancer. Only endpoints
   * in the upstream cluster with metadata matching what's set in this field will be considered
   * for load balancing. If using :ref:`weighted_clusters
   * <envoy_api_field_route.RouteAction.weighted_clusters>`, metadata will be merged, with values
   * provided there taking precedence. The filter name should be specified as *envoy.lb*.
   */
  'metadata_match': (_envoy_api_v2_core_Metadata__Output);
  /**
   * Indicates that during forwarding, the matched prefix (or path) should be
   * swapped with this value. This option allows application URLs to be rooted
   * at a different path from those exposed at the reverse proxy layer. The router filter will
   * place the original path before rewrite into the :ref:`x-envoy-original-path
   * <config_http_filters_router_x-envoy-original-path>` header.
   * 
   * Only one of *prefix_rewrite* or
   * :ref:`regex_rewrite <envoy_api_field_route.RouteAction.regex_rewrite>`
   * may be specified.
   * 
   * .. attention::
   * 
   * Pay careful attention to the use of trailing slashes in the
   * :ref:`route's match <envoy_api_field_route.Route.match>` prefix value.
   * Stripping a prefix from a path requires multiple Routes to handle all cases. For example,
   * rewriting * /prefix* to * /* and * /prefix/etc* to * /etc* cannot be done in a single
   * :ref:`Route <envoy_api_msg_route.Route>`, as shown by the below config entries:
   * 
   * .. code-block:: yaml
   * 
   * - match:
   * prefix: "/prefix/"
   * route:
   * prefix_rewrite: "/"
   * - match:
   * prefix: "/prefix"
   * route:
   * prefix_rewrite: "/"
   * 
   * Having above entries in the config, requests to * /prefix* will be stripped to * /*, while
   * requests to * /prefix/etc* will be stripped to * /etc*.
   */
  'prefix_rewrite': (string);
  /**
   * Indicates that during forwarding, the host header will be swapped with
   * this value.
   */
  'host_rewrite'?: (string);
  /**
   * Indicates that during forwarding, the host header will be swapped with
   * the hostname of the upstream host chosen by the cluster manager. This
   * option is applicable only when the destination cluster for a route is of
   * type *strict_dns* or *logical_dns*. Setting this to true with other cluster
   * types has no effect.
   */
  'auto_host_rewrite'?: (_google_protobuf_BoolValue__Output);
  /**
   * Specifies the upstream timeout for the route. If not specified, the default is 15s. This
   * spans between the point at which the entire downstream request (i.e. end-of-stream) has been
   * processed and when the upstream response has been completely processed. A value of 0 will
   * disable the route's timeout.
   * 
   * .. note::
   * 
   * This timeout includes all retries. See also
   * :ref:`config_http_filters_router_x-envoy-upstream-rq-timeout-ms`,
   * :ref:`config_http_filters_router_x-envoy-upstream-rq-per-try-timeout-ms`, and the
   * :ref:`retry overview <arch_overview_http_routing_retry>`.
   */
  'timeout': (_google_protobuf_Duration__Output);
  /**
   * Indicates that the route has a retry policy. Note that if this is set,
   * it'll take precedence over the virtual host level retry policy entirely
   * (e.g.: policies are not merged, most internal one becomes the enforced policy).
   */
  'retry_policy': (_envoy_api_v2_route_RetryPolicy__Output);
  /**
   * Indicates that the route has a request mirroring policy.
   * 
   * .. attention::
   * This field has been deprecated in favor of `request_mirror_policies` which supports one or
   * more mirroring policies.
   */
  'request_mirror_policy': (_envoy_api_v2_route_RouteAction_RequestMirrorPolicy__Output);
  /**
   * Optionally specifies the :ref:`routing priority <arch_overview_http_routing_priority>`.
   */
  'priority': (keyof typeof _envoy_api_v2_core_RoutingPriority);
  /**
   * Specifies a set of rate limit configurations that could be applied to the
   * route.
   */
  'rate_limits': (_envoy_api_v2_route_RateLimit__Output)[];
  /**
   * Specifies if the rate limit filter should include the virtual host rate
   * limits. By default, if the route configured rate limits, the virtual host
   * :ref:`rate_limits <envoy_api_field_route.VirtualHost.rate_limits>` are not applied to the
   * request.
   */
  'include_vh_rate_limits': (_google_protobuf_BoolValue__Output);
  /**
   * Specifies a list of hash policies to use for ring hash load balancing. Each
   * hash policy is evaluated individually and the combined result is used to
   * route the request. The method of combination is deterministic such that
   * identical lists of hash policies will produce the same hash. Since a hash
   * policy examines specific parts of a request, it can fail to produce a hash
   * (i.e. if the hashed header is not present). If (and only if) all configured
   * hash policies fail to generate a hash, no hash will be produced for
   * the route. In this case, the behavior is the same as if no hash policies
   * were specified (i.e. the ring hash load balancer will choose a random
   * backend). If a hash policy has the "terminal" attribute set to true, and
   * there is already a hash generated, the hash is returned immediately,
   * ignoring the rest of the hash policy list.
   */
  'hash_policy': (_envoy_api_v2_route_RouteAction_HashPolicy__Output)[];
  /**
   * Indicates that the route has a CORS policy.
   */
  'cors': (_envoy_api_v2_route_CorsPolicy__Output);
  /**
   * The HTTP status code to use when configured cluster is not found.
   * The default response code is 503 Service Unavailable.
   */
  'cluster_not_found_response_code': (keyof typeof _envoy_api_v2_route_RouteAction_ClusterNotFoundResponseCode);
  /**
   * If present, and the request is a gRPC request, use the
   * `grpc-timeout header <https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md>`_,
   * or its default value (infinity) instead of
   * :ref:`timeout <envoy_api_field_route.RouteAction.timeout>`, but limit the applied timeout
   * to the maximum value specified here. If configured as 0, the maximum allowed timeout for
   * gRPC requests is infinity. If not configured at all, the `grpc-timeout` header is not used
   * and gRPC requests time out like any other requests using
   * :ref:`timeout <envoy_api_field_route.RouteAction.timeout>` or its default.
   * This can be used to prevent unexpected upstream request timeouts due to potentially long
   * time gaps between gRPC request and response in gRPC streaming mode.
   * 
   * .. note::
   * 
   * If a timeout is specified using :ref:`config_http_filters_router_x-envoy-upstream-rq-timeout-ms`, it takes
   * precedence over `grpc-timeout header <https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md>`_, when
   * both are present. See also
   * :ref:`config_http_filters_router_x-envoy-upstream-rq-timeout-ms`,
   * :ref:`config_http_filters_router_x-envoy-upstream-rq-per-try-timeout-ms`, and the
   * :ref:`retry overview <arch_overview_http_routing_retry>`.
   */
  'max_grpc_timeout': (_google_protobuf_Duration__Output);
  /**
   * Specifies the idle timeout for the route. If not specified, there is no per-route idle timeout,
   * although the connection manager wide :ref:`stream_idle_timeout
   * <envoy_api_field_config.filter.network.http_connection_manager.v2.HttpConnectionManager.stream_idle_timeout>`
   * will still apply. A value of 0 will completely disable the route's idle timeout, even if a
   * connection manager stream idle timeout is configured.
   * 
   * The idle timeout is distinct to :ref:`timeout
   * <envoy_api_field_route.RouteAction.timeout>`, which provides an upper bound
   * on the upstream response time; :ref:`idle_timeout
   * <envoy_api_field_route.RouteAction.idle_timeout>` instead bounds the amount
   * of time the request's stream may be idle.
   * 
   * After header decoding, the idle timeout will apply on downstream and
   * upstream request events. Each time an encode/decode event for headers or
   * data is processed for the stream, the timer will be reset. If the timeout
   * fires, the stream is terminated with a 408 Request Timeout error code if no
   * upstream response header has been received, otherwise a stream reset
   * occurs.
   */
  'idle_timeout': (_google_protobuf_Duration__Output);
  'upgrade_configs': (_envoy_api_v2_route_RouteAction_UpgradeConfig__Output)[];
  'internal_redirect_action': (keyof typeof _envoy_api_v2_route_RouteAction_InternalRedirectAction);
  /**
   * Indicates that the route has a hedge policy. Note that if this is set,
   * it'll take precedence over the virtual host level hedge policy entirely
   * (e.g.: policies are not merged, most internal one becomes the enforced policy).
   */
  'hedge_policy': (_envoy_api_v2_route_HedgePolicy__Output);
  /**
   * If present, Envoy will adjust the timeout provided by the `grpc-timeout` header by subtracting
   * the provided duration from the header. This is useful in allowing Envoy to set its global
   * timeout to be less than that of the deadline imposed by the calling client, which makes it more
   * likely that Envoy will handle the timeout instead of having the call canceled by the client.
   * The offset will only be applied if the provided grpc_timeout is greater than the offset. This
   * ensures that the offset will only ever decrease the timeout and never set it to 0 (meaning
   * infinity).
   */
  'grpc_timeout_offset': (_google_protobuf_Duration__Output);
  /**
   * Indicates that during forwarding, the host header will be swapped with the content of given
   * downstream or :ref:`custom <config_http_conn_man_headers_custom_request_headers>` header.
   * If header value is empty, host header is left intact.
   * 
   * .. attention::
   * 
   * Pay attention to the potential security implications of using this option. Provided header
   * must come from trusted source.
   */
  'auto_host_rewrite_header'?: (string);
  /**
   * Indicates that the route has request mirroring policies.
   */
  'request_mirror_policies': (_envoy_api_v2_route_RouteAction_RequestMirrorPolicy__Output)[];
  /**
   * An internal redirect is handled, iff the number of previous internal redirects that a
   * downstream request has encountered is lower than this value, and
   * :ref:`internal_redirect_action <envoy_api_field_route.RouteAction.internal_redirect_action>`
   * is set to :ref:`HANDLE_INTERNAL_REDIRECT
   * <envoy_api_enum_value_route.RouteAction.InternalRedirectAction.HANDLE_INTERNAL_REDIRECT>`
   * In the case where a downstream request is bounced among multiple routes by internal redirect,
   * the first route that hits this threshold, or has
   * :ref:`internal_redirect_action <envoy_api_field_route.RouteAction.internal_redirect_action>`
   * set to
   * :ref:`PASS_THROUGH_INTERNAL_REDIRECT
   * <envoy_api_enum_value_route.RouteAction.InternalRedirectAction.PASS_THROUGH_INTERNAL_REDIRECT>`
   * will pass the redirect back to downstream.
   * 
   * If not specified, at most one redirect will be followed.
   */
  'max_internal_redirects': (_google_protobuf_UInt32Value__Output);
  /**
   * Indicates that during forwarding, portions of the path that match the
   * pattern should be rewritten, even allowing the substitution of capture
   * groups from the pattern into the new path as specified by the rewrite
   * substitution string. This is useful to allow application paths to be
   * rewritten in a way that is aware of segments with variable content like
   * identifiers. The router filter will place the original path as it was
   * before the rewrite into the :ref:`x-envoy-original-path
   * <config_http_filters_router_x-envoy-original-path>` header.
   * 
   * Only one of :ref:`prefix_rewrite <envoy_api_field_route.RouteAction.prefix_rewrite>`
   * or *regex_rewrite* may be specified.
   * 
   * Examples using Google's `RE2 <https://github.com/google/re2>`_ engine:
   * 
   * * The path pattern ``^/service/([^/]+)(/.*)$`` paired with a substitution
   * string of ``\2/instance/\1`` would transform ``/service/foo/v1/api``
   * into ``/v1/api/instance/foo``.
   * 
   * * The pattern ``one`` paired with a substitution string of ``two`` would
   * transform ``/xxx/one/yyy/one/zzz`` into ``/xxx/two/yyy/two/zzz``.
   * 
   * * The pattern ``^(.*?)one(.*)$`` paired with a substitution string of
   * ``\1two\2`` would replace only the first occurrence of ``one``,
   * transforming path ``/xxx/one/yyy/one/zzz`` into ``/xxx/two/yyy/one/zzz``.
   * 
   * * The pattern ``(?i)/xxx/`` paired with a substitution string of ``/yyy/``
   * would do a case-insensitive match and transform path ``/aaa/XxX/bbb`` to
   * ``/aaa/yyy/bbb``.
   */
  'regex_rewrite': (_envoy_type_matcher_RegexMatchAndSubstitute__Output);
  /**
   * [#not-implemented-hide:]
   * Specifies the configuration for retry policy extension. Note that if this is set, it'll take
   * precedence over the virtual host level retry policy entirely (e.g.: policies are not merged,
   * most internal one becomes the enforced policy). :ref:`Retry policy <envoy_api_field_route.VirtualHost.retry_policy>`
   * should not be set if this field is used.
   */
  'retry_policy_typed_config': (_google_protobuf_Any__Output);
  'cluster_specifier': "cluster"|"cluster_header"|"weighted_clusters";
  'host_rewrite_specifier': "host_rewrite"|"auto_host_rewrite"|"auto_host_rewrite_header";
}
