﻿using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;

using HTML_WPF.Component;
using MVVM.Cef.Glue.WPF;
using MVVM.Cef.Glue.CefSession;
using MVVM.HTML.Core.JavascriptEngine.Window;

namespace MVVM.Cef.Glue
{
    internal class CefGlueWPFWebWindow : IWPFWebWindow
    {
        private readonly WpfCefBrowser _WpfCefBrowser;
        internal CefGlueWPFWebWindow(MVVMCefApp app)
        {
            _WpfCefBrowser = new WpfCefBrowser(app)
            {
                Visibility = Visibility.Hidden,
                HorizontalAlignment = HorizontalAlignment.Stretch,
                VerticalAlignment = VerticalAlignment.Stretch,
                ContextMenu = new ContextMenu() { Visibility = Visibility.Collapsed }
            };
        }

        public IHTMLWindow HTMLWindow
        {
            get { return _WpfCefBrowser; }
        }

        public void Inject(Key KeyToInject)
        {
            _WpfCefBrowser.Inject(KeyToInject);
        }

        public UIElement UIElement
        {
            get { return _WpfCefBrowser; }
        }

        public void Dispose()
        {
            _WpfCefBrowser.Dispose();
        }
    }
}
