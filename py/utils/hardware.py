from pyembedded.raspberry_pi_tools.raspberrypi import PI

pi = PI()


def get_ram_usage():
    return pi.get_ram_info()


def get_cpu_usage():
    return pi.get_cpu_usage()


def get_cpu_temp():
    return pi.get_cpu_temp()


def get_wifi_status():
    return pi.get_wifi_status()

