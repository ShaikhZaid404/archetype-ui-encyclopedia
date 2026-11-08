#!/usr/bin/env python3
"""
Lightweight development server for Archetype UI Encyclopedia.
Binds strictly to 127.0.0.1 on safe development port 8000.
"""

import http.server
import socketserver
import os
import sys

PORT = 8000
HOST = "127.0.0.1"

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS and caching headers for local testing
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

if __name__ == '__main__':
    web_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(web_dir)

    # Allow port reuse
    socketserver.TCPServer.allow_reuse_address = True

    try:
        with socketserver.TCPServer((HOST, PORT), CustomHandler) as httpd:
            print(f"🚀 Archetype UI Server running at http://{HOST}:{PORT}")
            print(f"📁 Serving directory: {web_dir}")
            print("Press Ctrl+C to stop.")
            httpd.serve_forever()
    except OSError as e:
        print(f"⚠️ Port {PORT} is currently busy or unavailable ({e}). Trying port 8080...")
        PORT = 8080
        with socketserver.TCPServer((HOST, PORT), CustomHandler) as httpd:
            print(f"🚀 Archetype UI Server running at http://{HOST}:{PORT}")
            print(f"📁 Serving directory: {web_dir}")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n🛑 Server stopped.")
        sys.exit(0)
