function FindProxyForURL(url, host) {
    var resolved_ip = dnsResolve(host);
    if (isInNet(resolved_ip, "142.150.237.0", "255.255.255.0")) {
        return "SOCKS 127.0.0.1:8882";
    } else {
        return "DIRECT";
    }
}
